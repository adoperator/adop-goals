import Cookies from "js-cookie"

window.AdopEventInit = function (argName = "conversion") {
  const re = new RegExp(`${argName}=([^&=]+)`)
  const clickid = re.exec(window.location.search)

  if (clickid) {
    Cookies.set("ADOPCID", clickid[1])
  }
}

window.AdopEventInit()

window.AdopEvent = function (value = 0, count = null) {
  const clickid = Cookies.get("ADOPCID")

  if (!clickid) {
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
