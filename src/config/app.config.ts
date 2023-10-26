interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Travel Agent', 'Finance Manager'],
  tenantName: 'Company',
  applicationName: 'Flight Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal information',
    'Update personal information',
    'View company information',
    'Manage personal bookings',
  ],
  ownerAbilities: ['Manage user information', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/cdf45989-c428-45b8-80d0-6bca6c124b44',
};
