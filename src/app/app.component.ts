import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './services/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

public blockchain;

constructor(private blochainService: BlockchainService){}
 
  ngOnInit() {
   this.blockchain = this.blochainService.blockchainInstance;
  }

  areTherePendingTransactions(): boolean{
    return this.blockchain.pendingTransactions.length > 0;
  }

}
