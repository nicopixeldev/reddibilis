export function PMT(ir: number, np: number, pv: number, fv?: number, type?: number): number {
  /*
    * ir   - interest rate per month
    * np   - number of periods (months)
    * pv   - present value
    * fv   - future value
    * type - when the payments are due:
    *        0: end of the period, e.g. end of month (default)
    *        1: beginning of period
    */

  var pmt, pvif

  fv || (fv = 0)
  type || (type = 0)

  if (ir === 0)
      return -(pv + fv)/np

  pvif = Math.pow(1 + ir, np)
  pmt = - ir * (pv * pvif + fv) / (pvif - 1)

  if (type === 1)
      pmt /= (1 + ir)

  return pmt
}

export function IPMT(rate: number, per: number, pv: number, pmt: number): number {
  var tmp = Math.pow(1 + rate, per)
  return 0 - (pv * tmp * rate + pmt * (tmp - 1))
}

export function precioEntradaTotal(args: any): number {

  const {
    valor,
    itp,
    notaria,
    registro,
    gestoria,
    reforma,
    comision_agencia,
  } = convertObjToNum(args);

  const gastosCompraVenta = valor + ((valor * (itp/100)) + notaria + registro + gestoria + reforma + comision_agencia);

  return gastosCompraVenta;
}

export function convertObjToNum(obj: any) {
  const newObj: Record<string, number> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = Math.round(parseFloat(obj[key]) * 100) / 100;
    }
  }

  return newObj;
}