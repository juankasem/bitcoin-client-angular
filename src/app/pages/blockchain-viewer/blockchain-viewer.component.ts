import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styles: [
  ]
})
export class BlockchainViewerComponent implements OnInit {
  
  public blocks = []
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.blocks = this.blockchainService.blockchainInstance.chain;
    this.selectedBlock = this.blocks[0];
  }

   showTransactions(block): void {
    this.selectedBlock = block;
  }
   
   hasBlockAnyTransactions(block): boolean {
     return block.transactions.length > 0;
   }

   isSelectedBlock(block): boolean {
     return this.selectedBlock = block;
   }
   
   getBlockNumber(block): number {
     return this.blocks.indexOf(block) + 1;
   }
  
}
