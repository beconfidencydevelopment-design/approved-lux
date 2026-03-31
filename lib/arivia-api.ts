const ARRIVIA_CONFIG = {
  baseUrl: 'https://api.saveonresorts.com',
  username: 'ApprovedExperiences',
  password: 'yzv3cgnz9bgof73d',
};

class ArriviaService {
  private baseUrl: string;
  private username: string;
  private password: string;

  constructor() {
    this.baseUrl = ARRIVIA_CONFIG.baseUrl;
    this.username = ARRIVIA_CONFIG.username;
    this.password = ARRIVIA_CONFIG.password;
    
    // console.log('ArriviaService initialized with:', {
    //   baseUrl: this.baseUrl,
    //   username: this.username
    // });
  }

  private async makeRequest(endpoint: string, data: any, method: string = 'POST') {
    const url = `${this.baseUrl}${endpoint}`;
    
    // console.log('Making request to:', url);
    // console.log('Request data:', data);

    const headers = {
      'Content-Type': 'application/json',
      'x-saveon-username': this.username,
      'x-saveon-secret': this.password,
    };

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
      });

      // console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      // console.log('API Response:', result);
      return result;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async login(email: string, password: string, contractNumber?: string) {
    const payload = {
      APIUsername: this.username,
      APIPassword: this.password,
      Email: email,
      Password: password,
      ContractNumber: contractNumber || '',
    };

    return this.makeRequest('/clubmembership/getlogintoken', payload);
  }

  async loginSSO(email: string, contractNumber?: string) {
    const payload = {
      APIUsername: this.username,
      APIPassword: this.password,
      Email: email,
      ContractNumber: contractNumber || '',
    };

    return this.makeRequest('/clubmembership/getlogintokennovalidation', payload);
  }

  async createMember(memberData: any) {
    const payload = {
      Email: memberData.email,
      Password: memberData.password,
      FirstName: memberData.firstName,
      LastName: memberData.lastName,
      Address: memberData.address,
      City: memberData.city,
      TwoLetterCountryCode: memberData.countryCode || 'US',
      Phone: memberData.phone,
      ContractNumber: memberData.contractNumber,
      UserAccountTypeID: memberData.accountTypeId,
    };

    return this.makeRequest('/v2/clubmembership/createdefault', payload);
  }
}

// Create and export a single instance
export const arriviaService = new ArriviaService();