type Cases = {
  new: string
  active: number
  critical: number
  recovered: number
  total: number
}

type Deaths = {
  new: string
  total: number
}

type Tests = {
  total?: number
}

type Country = {
  continent: string
  country: string
  population: number
  cases: Cases
  deaths: Deaths
  tests: Tests
  day: string
  time: string
}