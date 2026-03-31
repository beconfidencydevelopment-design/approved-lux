// types/api.ts
export interface CreateMemberRequest {
  userData: {
    email: string
    password: string
    firstName: string
    lastName: string
  }
  membershipTierId: string
  paymentData: {
    stripeCustomerId: string
    promoCode?: string
    discount?: number
    totalAmount: number
    items: Array<{
      name: string
      category: string
      sku: string
      quantity: number
      unitPrice: number
      subTotal: number
    }>
  }
  impactData?: {
    imRef?: string
    customProfileId?: string
  }
}