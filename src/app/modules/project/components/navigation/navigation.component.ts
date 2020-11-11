import { Component, OnInit } from '@angular/core';

interface NavLinkInterface {
  icon: string;
  title: string;
  url: string;
}

interface ContentProjectInterface {
  _id: string;
  avatar: string;
  title: string;
  type: string;
}

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
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  tabProject: { title: string, status: string }[] = [
    { title: 'Nhóm', status: 'group' },
    { title: 'Bạn bè', status: 'friend' },
  ]

  listProject: ItemProject[] = [
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://i1.sndcdn.com/avatars-000745640497-dl5iry-t500x500.jpg', 
      title: 'hello', 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://i1.sndcdn.com/avatars-000745640497-dl5iry-t500x500.jpg', 
      title: 'hello', 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://i1.sndcdn.com/avatars-000745640497-dl5iry-t500x500.jpg', 
      title: 'hello', 
    },
    { 
      _id: '5f4f19d5f80a3523cd5b6a6b', 
      avatar: 'https://i1.sndcdn.com/avatars-000745640497-dl5iry-t500x500.jpg', 
      title: 'hello', 
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


}
