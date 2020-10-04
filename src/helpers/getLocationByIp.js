import { ipt } from "../stores/apiStore"

export const getLocationByIp = async(res) => {
    const ipS = res.loc.split(',').map(i => parseFloat(i))
    ipt.set(ipS)
}