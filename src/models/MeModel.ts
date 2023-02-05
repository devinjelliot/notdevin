


export interface MeModel {
    address: string; // get this data from integration
    balance: string;
  }

interface Error {
    message: string;
}

  enum AccessLevel {
    Read,
    Write,
    Modify,
}

interface ReadAccess {
    canRead: boolean;
}

interface WriteAccess {
    canWrite: boolean;
}

interface ModifyAccess {
    canModify: boolean;
    canDelete: boolean;
}

interface AccessError extends Error {
    type: "Access Error";
}

interface WalletError extends Error {
    type: "WalletError"
}

type Access = ReadAccess | WriteAccess | ModifyAccess;

