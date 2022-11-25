export interface message {
  message: String;
  statusCode: Number;
}

export interface createUserType {
  input: {
    contact: string;
    email: string;
    name: string;
    password: string;
    profile_img: string;

    address: {
      country: string;
      country_code: string;
      location: {
        type: string;
        is_location_exact: boolean;
        coordinates: [string];
      };
      street: string;
      suburb: string;
      market: string;
    };
  };
}
