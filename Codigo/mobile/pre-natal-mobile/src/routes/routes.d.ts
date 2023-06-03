export type InitialRoutesParams = {
  ForgotPassword: undefined;
  SignIn: undefined;
  SignUp: undefined;
  PersonalData: undefined;
  PersonalContact: undefined;
  PatientEmergency: undefined;
  PatientSus: undefined;
};

//TODO: add abas do menu bar
export type AppRoutesParams = {
  HomeScreens: HomeRoutesParams;
  InfoScreens: InfoRoutesParams;
  ProfileScreens: ProfileRoutesParams;
};

export type ProfileRoutesParams = {
  Profile: undefined;
};

export type HomeRoutesParams = {
  Home: undefined;
};

export type InfoRoutesParams = {
  Info: undefined;
};
