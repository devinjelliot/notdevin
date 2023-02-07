import { List } from 'immutable';

interface MeAccountModel {
  ensName: string;
  name: string;
  farcaster: string;
  twitter: string;
  linkedin: string;
  paragraph: string;
  address: string;
  city: string;
  state: string;
  calendarLink: string;
  residenceAddress: string;
  accessLevel: AccessLevel;
}

enum AccessLevel {
  READ,
  WRITE,
  MODIFY,
}

class AccountModel {
  private accounts: List<MeAccountModel> = List([]);

  public addAccount(account: MeAccountModel): AccountModel {
    this.accounts = this.accounts.push(account);
    return this;
  }
  

  public getAccount(addressOrEnsName: string): MeAccountModel | undefined {
    return this.accounts.find((account) => account.address === addressOrEnsName || account.ensName === addressOrEnsName);
  }

  public updateAccessLevel(addressOrEnsName: string, accessLevel: AccessLevel): AccountModel {
    const account = this.getAccount(addressOrEnsName);
    if (account) {
      const index = this.accounts.indexOf(account);
      this.accounts = this.accounts.set(index, { ...account, accessLevel })
      return this;
    }
    return this;
  }

  public checkAccess(addressOrEnsName: string, desiredAccessLevel: AccessLevel): boolean {
    const account = this.getAccount(addressOrEnsName);
    if (account) {
      return account.accessLevel >= desiredAccessLevel;
    }
    return false;
  }
}

export default new AccountModel();
