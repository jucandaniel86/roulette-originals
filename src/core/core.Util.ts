export default class Utils {
  public static IsVariableSet(variable: any): boolean {
    return variable !== undefined && variable !== null
  }

  public static getUrlParameter(param: string, decodeValue = true): string | undefined {
    const url = window.location.search.substring(1)
    const ulrParam = url.split('&')
    let hasParam: Array<string>

    for (let i = 0, { length } = ulrParam; i < length; i += 1) {
      hasParam = ulrParam[i].split('=')

      if (hasParam[0].toLocaleLowerCase() === param.toLocaleLowerCase()) {
        if (hasParam[1] === undefined) {
          return undefined
        } else {
          return decodeValue ? decodeURIComponent(hasParam[1]) : hasParam[1]
        }
      }
    }

    return undefined
  }

  public static async loadJS(src: string, loadAsync: boolean = true): Promise<boolean> {
    return await new Promise((resolve) => {
      const ref = window.document.getElementsByTagName('script')[0]
      const script = window.document.createElement('script')
      script.src = src
      script.async = loadAsync
      script.defer = false
      //@ts-ignore
      ref.parentNode.insertBefore(script, ref)
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
    })
  }
}
