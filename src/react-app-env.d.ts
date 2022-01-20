/// <reference types="react-scripts" />


declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly PUBLIC_URL: string;
    }
  }


  
declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test' | 'build';
      readonly CAR_ENTRANCE_ID: string;
    }
  }