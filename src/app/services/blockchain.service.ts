import { Injectable } from '@angular/core';
import { Blockchain } from "bitcoin-clone-nodejs";
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingTransactions('my-wallet-address');
    this.generateWalletKeys();
  }

  addTransaction(trans){
    this.blockchainInstance.addTransaction(trans);
  }
  
  getPendingTransactions(){
    return this.blockchainInstance.pendingTransactions
  }

  isAddressFromCurrentUser(address): boolean {
    return address == this.walletKeys[0].publicKey
  }

  minePendingTransactions(){
    this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
  }

  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    });
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}
