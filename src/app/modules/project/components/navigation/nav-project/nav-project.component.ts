import { Component, OnInit } from '@angular/core';

interface ItemFriend {
  _id:string;
  avatar: string;
  fullname: string;
  txt: string;
}

interface ItemProject {
  _id:string;
  avatar: string;
  title: string;
}

@Component({
  selector: 'app-nav-project',
  templateUrl: './nav-project.component.html',
  styleUrls: ['./nav-project.component.scss']
})
export class NavProjectComponent implements OnInit {
  tabProject: { title: string, status: string }[] = [
    { title: 'Nhóm', status: 'group' },
    { title: 'Bạn bè', status: 'friend' },
  ]

  listProject: ItemProject[] = [
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://picsum.photos/200/300.webp', 
      title: 'dự án chung cư lqh', 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://picsum.photos/200/301.webp', 
      title: 'Dự án phát triển tòa nhà', 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://picsum.photos/200/302.webp', 
      title: 'dự án thương mại điện tử', 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://picsum.photos/200/303.webp', 
      title: 'dự án sock', 
    }
  ]

  listFriend: ItemFriend[] = [
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://jobchat-production.s3.ap-southeast-1.amazonaws.com/avatarUser/hir03KUasGZSu7U7Yoc6rtPX2C33', 
      fullname: 'Holy shoti', 
      txt: 'hello aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://jobchat-production.s3.ap-southeast-1.amazonaws.com/avatarUser/hir03KUasGZSu7U7Yoc6rtPX2C33', 
      fullname: 'Holy shoti', 
      txt: 'hello aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://jobchat-production.s3.ap-southeast-1.amazonaws.com/avatarUser/hir03KUasGZSu7U7Yoc6rtPX2C33', 
      fullname: 'Holy shoti', 
      txt: 'hello aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://jobchat-production.s3.ap-southeast-1.amazonaws.com/avatarUser/hir03KUasGZSu7U7Yoc6rtPX2C33', 
      fullname: 'Holy shoti', 
      txt: 'hello aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectTab(index: number) :void {
    
  }
}
