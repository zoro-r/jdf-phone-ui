<template>
  <div class="distpicker">
    <div :class="addressHeader">
      <ul>
        <li :class="{'active': tab == 1}" @click="resetProvince">{{ currentProvince && !staticPlaceholder ? currentProvince : placeholders.province }}</li>
        <template v-if="!onlyProvince">
          <li v-if="showCityTab" :class="{'active': tab == 2}" @click="resetCity">{{ currentCity && !staticPlaceholder ? currentCity : placeholders.city }}</li>
          <li v-if="showAreaTab && !hideArea" :class="{'active': tab == 3}">{{ currentArea && !staticPlaceholder ? currentArea : placeholders.area }}</li>
        </template>
      </ul>
    </div>
    <div style="height:47px"></div>
    <div :class="addressContainer">
      <transition name="slide-left">
        <ul v-if="tab == 1" v-bind:style="{height:screenHeight+'px'}">
          <li v-for="(item, index) in provinces" :key="index" :class="{'active': item == currentProvince}" @click="chooseProvince(item)">{{ item }}</li>
        </ul>
      </transition>
      <template v-if="!onlyProvince">
        <transition name="slide-left">
          <ul v-if="tab == 2" v-bind:style="{height:screenHeight+'px'}">
            <li v-for="(item, index) in cities" :key="index" :class="{'active': item == currentCity}" @click="chooseCity(item)">{{ item }}</li>
          </ul>
        </transition>
        <transition name="slide-left">
          <ul v-if="tab == 3 && !hideArea" v-bind:style="{height:screenHeight+'px'}">
            <li v-for="(item, index) in areas" :key="index" :class="{'active': item == currentArea}" @click="chooseArea(item)">{{ item }}</li>
          </ul>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
const DEFAULT_CODE = "xx"

export default {
  name: "v-distpicker",
  props: {
    province: { type: [String, Number], default: "" },
    city: { type: [String, Number], default: "" },
    area: { type: [String, Number], default: "" },
    type: { type: String, default: "" },
    hideArea: { type: Boolean, default: false },
    onlyProvince: { type: Boolean, default: false },
    staticPlaceholder: { type: Boolean, default: false },
    districts: { type: Object, default: "" },
    placeholders: {
      type: Object,
      default() {
        return {
          province: "省",
          city: "市",
          area: "区"
        };
      }
    },
    wrapper: { type: String, default: "address" },
    addressHeader: { type: String, default: "address-header" },
		addressContainer: { type: String, default: "address-container" },
		defaultCode:{type:String,default:"100000"}
  },
  data() {
    return {
      screenHeight: document.documentElement.clientHeight * 0.55 - 58,
      tab: 1,
      showCityTab: false,
      showAreaTab: false,
      provinces: [],
      cities: [],
      areas: [],
      currentProvince:
        this.determineType(this.province) || this.placeholders.province,
      currentCity: this.determineType(this.city) || this.placeholders.city,
      currentArea: this.determineType(this.area) || this.placeholders.area
    };
  },
  created() {
    if (this.type != "mobile") {
      this.provinces = this.getDistricts();
      this.cities = this.province
        ? this.getDistricts(this.getAreaCode(this.determineType(this.province)))
        : [];
      this.areas = this.city
        ? this.getDistricts(this.getAreaCode(this.determineType(this.city)))
        : [];
    } else {
      if (this.area && !this.hideArea && !this.onlyProvince) {
        this.tab = 3;
        this.showCityTab = true;
        this.showAreaTab = true;
        this.areas = this.getDistricts(
          this.getAreaCode(this.determineType(this.city))
        );
      } else if (this.city && this.hideArea && !this.onlyProvince) {
        this.tab = 2;
        this.showCityTab = true;
        this.cities = this.getDistricts(
          this.getAreaCode(this.determineType(this.province))
        );
      } else {
        this.provinces = this.getDistricts();
        console.log(this.provinces);
      }
    }
  },
  watch: {
    currentProvince(vaule) {
      this.$emit("province", {
        code: this.getAreaCode(this.currentProvince),
        value: this.currentProvince
      });
      if (this.onlyProvince) this.emit("selected");
    },
    currentCity(value) {
      this.$emit("city", {
        code: this.getAreaCode(value),
        value: value
      });
      if (value != this.placeholders.city && this.hideArea)
        this.emit("selected");
    },
    currentArea(value) {
      this.$emit("area", {
        code: this.getAreaCode(value),
        value: value
      });
      if (value != this.placeholders.area) this.emit("selected");
    },
    province(value) {
      this.currentProvince = this.province || this.placeholders.province;
      this.cities = this.determineValue(
        this.currentProvince,
        this.placeholders.province
      );
    },
    city(value) {
      this.currentCity = this.city || this.placeholders.city;
      this.areas = this.determineValue(
        this.currentCity,
        this.placeholders.city
      );
    },
    area(value) {
      this.currentArea = this.area || this.placeholders.area;
    }
  },
  methods: {
    emit(name) {
      let data = {
        province: {
          code: this.getAreaCode(this.currentProvince),
          value: this.currentProvince
        }
      };

      if (!this.onlyProvince) {
        this.$set(data, "city", {
          code: this.getAreaCode(this.currentCity),
          value: this.currentCity
        });
      }

      if (!this.onlyProvince || this.hideArea) {
        this.$set(data, "area", {
          code: this.getAreaCode(this.currentArea),
          value: this.currentArea
        });
      }

      this.$emit(name, data);
    },
    getCities() {
      this.currentCity = this.currentCity || this.placeholders.city;
      this.currentArea = this.placeholders.area;
      this.cities = this.determineValue(
        this.currentProvince,
        this.placeholders.province
      );
      this.cleanList("areas");
      if (this.cities == null) {
        this.emit("selected");
        this.tab = 1;
        this.showCityTab = false;
      }
    },
    getAreas() {
      this.currentArea = this.placeholders.area;
      this.areas = this.determineValue(
        this.currentCity,
        this.placeholders.city
      );
      if (this.areas == null) {
        this.emit("selected");
        this.tab = 2;
        this.showAreaTab = false;
      }
    },
    resetProvince() {
      this.tab = 1;
      this.provinces = this.getDistricts();
      this.showCityTab = false;
      this.showAreaTab = false;
    },
    resetCity() {
      this.tab = 2;
      this.showCityTab = true;
      this.showAreaTab = false;
      this.getCities();
    },
    chooseProvince(name) {
      this.currentProvince = name;
      if (this.onlyProvince) return;
      this.tab = 2;
      this.showCityTab = true;
      this.showAreaTab = false;
      this.currentCity = this.placeholders.city;
      this.getCities();
    },
    chooseCity(name) {
      this.currentCity = name;
      if (this.hideArea) return;
      this.tab = 3;
      this.showCityTab = true;
      this.showAreaTab = true;
      this.getAreas();
    },
    chooseArea(name) {
      this.currentArea = name;
    },
    getAreaCode(name) {
      for (var x in this.districts) {
        for (var y in this.districts[x]) {
          if (name == this.districts[x][y]) {
            return y;
          }
        }
      }
    },
    getCodeValue(code) {
      for (var x in this.districts) {
        for (var y in this.districts[x]) {
          if (code == y) {
            return this.districts[x][y];
          }
        }
      }
    },
    getDistricts(code = "no_code") {
      if (code == "no_code") {
        code = this.defaultCode;
			}
      return this.districts[code] || null;
    },
    determineValue(currentValue, placeholderValue) {
      if (currentValue == placeholderValue) {
        return [];
      } else {
        return this.getDistricts(this.getAreaCode(currentValue));
      }
    },
    determineType(value) {
      if (typeof value === "number") {
        return this.getCodeValue(value);
      }

      return value;
    },
    cleanList(name) {
      this[name] = []
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.address {
  color: #9caebf;
}

select {
  padding: 0.5rem 0.75rem;
  height: 40px;
  font-size: 1rem;
  line-height: 1.25;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;

  option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    text-align: left;
  }
}

.address-header {
	position: fixed !important;
	overflow: hidden;
  width: 100%;
  // top: 48px;
  background-color: #fff;
  box-shadow: 0 1px 0 0 #e9ecee;
  ul {
    height: 48px;
    line-height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: stretch;

    li {
      font-size: 1.3rem;
      display: inline-block; // padding: 10px 10px 7px;
      color: #394043;
      &.active {
        color: #52c750;
        border-bottom: 1px solid #52c750;
        position: relative;
        top: 1px;
      }
    }
  }
}

.address-container {
  background-color: #fff;
  // padding-bottom: 10px;
  ul {
    padding-bottom: 10px;
    // height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transition: all 0.25s linear;
    li {
      font-size: 1.3rem;
      padding-left: 32px;
      border-top: 1px solid rgb(246, 246, 246);
      color: rgb(57, 64, 67);
      height: 36px;
      line-height: 36px;
      &.active {
        color: #52c750;
      }
    }
  }
}
</style>
