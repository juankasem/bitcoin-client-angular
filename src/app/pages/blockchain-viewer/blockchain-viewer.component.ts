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
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.blocks = this.blockchainService.getBlocks();
  }

}
