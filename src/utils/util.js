export default {
    //星座解析函数
    // 1白羊座（3月21日 - 4月20日）
    // 2金牛座（4月21日 - 5月21日）
    // 3双子座（5月22日 - 6月21日）
    // 4巨蟹座（6月22日 - 7月22日）
    // 5狮子座（7月23日 - 8月22日）
    // 6处女座（8月23日 - 9月22日）
    // 7天秤座（9月23日 - 10月23日）
    // 8天蝎座（10月24日 - 11月22日）
    // 9射手座（11月23日 - 12月21日）
    // 10摩羯座（12月22日 - 1月20日）
    // 11水瓶座（1月21日 - 2月19日）
    // 12双鱼座（2月20日 - 3月20日）
    horoscopes(dateValue){
        let ret
        switch (dateValue.month()) {
            case 0:
                if (dateValue.date() <= 20) {
                    //摩羯座
                    ret='摩羯座'
                } else {
                    //水瓶座
                    ret='水瓶座'
                }
                break;
            case 1:
                if (dateValue.date() <= 19) {
                    //水瓶座
                    ret='水瓶座'
                } else {
                    //双鱼座
                    ret='双鱼座'
                }
                break;
            case 2:
                if (dateValue.date() <= 20) {
                    //双鱼座
                    ret='双鱼座'
                } else {
                    //白羊座
                    ret='白羊座'
                }
                break;
            case 3:
                if (dateValue.date() <= 20) {
                    //白羊座
                    ret='白羊座'
                } else {
                    //金牛座
                    ret='金牛座'
                }
                break;
            case 4:
                if (dateValue.date() <= 21) {
                    //金牛座
                    ret='金牛座'
                } else {
                    //双子座
                    ret='双子座'
                }
                break;
            case 5:
                if (dateValue.date() <= 21) {
                    //双子座
                    ret='双子座'
                } else {
                    //巨蟹座
                    ret='巨蟹座'
                }
                break;
            case 6:
                if (dateValue.date() <= 22) {
                    //巨蟹座
                    ret='巨蟹座'
                } else {
                    //狮子座
                    ret='狮子座'
                }
                break;
            case 7:
                if (dateValue.date() <= 22) {
                    //狮子座
                    ret='狮子座'
                } else {
                    //处女座
                    ret='处女座'
                }
                break;
            case 8:
                if (dateValue.date() <= 22) {
                    //处女座
                    ret='处女座'
                } else {
                    //天秤座
                    ret='天秤座'
                }
                break;
            case 9:
                if (dateValue.date() <= 23) {
                    //天秤座
                    ret='天秤座'
                } else {
                    //天蝎座
                    ret='天蝎座'
                }
                break;
            case 10:
                if (dateValue.date() <= 22) {
                    //天蝎座
                    ret='天蝎座'
                } else {
                    //射手座
                    ret='射手座'
                }
                break;
            case 11:
                if (dateValue.date() <= 21) {
                    //射手座
                    ret='射手座'
                } else {
                    //摩羯座
                    ret='摩羯座'
                }
                break;
            default:
                console.log(dateValue)
                break;
        }
        return ret
    }
}
