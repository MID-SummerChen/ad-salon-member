import postCode from './postCode'
import * as Enum from './Enum'
export default {
  data() {
    return {
      postCode,
      Enum,
    }
  },
  methods: {
    toEnum(type, value) {
      var i = _.findIndex(Enum[type], {value})
      return i > -1 ? Enum[type][i].label : value
    }
  }
}