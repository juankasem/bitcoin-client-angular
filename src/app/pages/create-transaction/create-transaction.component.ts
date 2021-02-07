import { Component, OnInit } from '@angular/core';
import { BlockchainService, IWalletKey } from 'src/app/services/blockchain.service';
import { Transaction } from 'bitcoin-clone-nodejs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  
  public newTx = new Transaction();
  public myWalletKey: IWalletKey;
 
  constructor(private blockchainService: BlockchainService, private router: Router) { 
    this.myWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
  }

  createTransaction(){
    this.newTx.fromAddress = this.myWalletKey.publicKey;
    this.newTx.signTransaction(this.myWalletKey.keyObj);
    
    try {
      this.blockchainService.addTransaction(this.newTx);

    } catch (error) {
      return;
    }
   
    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    this.newTx = new Transaction();
  }
}
