import { getLocationByIp } from "../helpers/getLocationByIp"

export const fetchApi = async(ip) => {
    const res = await fetch(`https://ipinfo.io/${ip}?token=c9b830dad3ed67`).then(res => res.json())
    getLocationByIp(res)
}