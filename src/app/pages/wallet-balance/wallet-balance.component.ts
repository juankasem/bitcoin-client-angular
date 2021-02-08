import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-wallet-balance',
  templateUrl: './wallet-balance.component.html',
  styleUrls: ['./wallet-balance.component.scss']
})
export class WalletBalanceComponent implements OnInit {
 
  public walletAddress = '';
  public balance = 0;
  public transactions = [];

  constructor(private blochainService: BlockchainService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.walletAddress= params.address;

      this.balance = this.blochainService.blockchainInstance.getBalanceOfAddress(this.walletAddress);
      this.transactions = this.blochainService.blockchainInstance.getAllTransactionsForWallet(this.walletAddress);
    });
  }

}
