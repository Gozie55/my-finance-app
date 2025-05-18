// Type definitions for the application

// User type
export interface User {
  id: number
  username: string
  phone: string
  email: string
  dateCreated: string
}

// Role type
export interface Role {
  id: number
  name: string
  dateCreated: string
}

// Branch type
export interface Branch {
  id: number
  name: string
  code: string
  address: string
  zone: string
  dateAdded: string
}

// Card Profile type
export interface CardProfile {
  id: number
  name: string
  currency: string
  expiration: string
  binPrefix: string
  dateCreated: string
}

// Card type
export interface Card {
  id: number
  cardholder: string
  maskedPAN: string
  dateIssued: string
  expiry: string
  batch: string
}

// Card Request type
export interface CardRequest {
  id: number
  branch: string
  initiator: string
  quantity: number
  batch: string
  dateRequested: string
  status: string
}

// Card Scheme type
export interface CardScheme {
  id: number
  name: string
  panLength: number
}

// Authorization type
export interface Authorization {
  id: number
  menu: string
  access: string
  enabled: boolean
}

// Chart Data types
export interface MonthlyIssuanceData {
  name: string
  personalized: number
  instant: number
}

export interface WeeklyIncomeData {
  name: string
  value: number
}

export interface CardStatusData {
  name: string
  value: number
  color: string
}
