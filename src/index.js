import Cookies from "js-cookie"

window.AdopEventInit = function (argName = "conversion") {
  const re = new RegExp(`${argName}=([^&=]+)`)
  const clickid = re.exec(window.location.search)

  if (clickid) {
    const oldId = Cookies.get("ADOPCID")
    if (oldId && oldId === clickid[1]) {
      Cookies.set("adRepeat", true)
    } else {
      Cookies.set("ADOPCID", clickid[1])
      Cookies.set("adRepeat", false)
    }
  }
}

window.AdopEventInit()

window.AdopEvent = function (value = 0, count = null) {
  const clickid = Cookies.get("ADOPCID")
  const repeat = Cookies.get("adRepeat")

  if (!clickid || repeat) {
    return false
  }

  const img = document.createElement("img")
  img.style.width = "1px"
  img.style.height = "1px"
  img.style.display = "none"

  let query = `?c=${clickid}`

  if (value) query += `&value=${value}`
  if (count) query += `&count=${count}`

  img.src = `${window.location.protocol}//s2s.adoperator.com/conversion${query}`

  document.body.appendChild(img)
}
