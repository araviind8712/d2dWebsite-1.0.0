import { Component, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesComponent } from '../services/services.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import serviceMenu from '../../../assets/serviceMenu.json'
import { ActivatedRoute } from '@angular/router';
import {CONFIG} from '../../../assets/urlConfig';



@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit,OnChanges{
  @Input() mouseTop: boolean = false;
  @Input() isSecondPage: boolean = false;
  @Output() navHeightChanged: EventEmitter<{height:number,bottomReached:boolean}> = new EventEmitter<{height:number,bottomReached:boolean}>();
  @ViewChild('navbarwhite', { static: false }) navbarwhite!: ElementRef;
  @ViewChild('navbarblack', { static: false }) navbarblack!: ElementRef;

  
  secondPage: boolean = true;
  isFixed : boolean = false;
  serviceMenu: any;
  isServiceVisible = false;
  isHome = false;
  isCompany = false;
  isCompDropdown = false;
  serviceVisible = false;
  pageName:any;
  isCollapsed : boolean = true;
  config:any;

  constructor(private dialog: MatDialog, private route:ActivatedRoute,private renderer: Renderer2) { 
    this.serviceMenu = serviceMenu;
    this.config = CONFIG;
    
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((data)=>{
      this.pageName =data.get('page');
      this.isHome = data.get('page') === "home";
      this.isServiceVisible = data.get('page') === 'service';
      this.isCompany = data.get('page') === 'company';
    })
    this.onScroll();
  }

  toggleSecondaryNavbar(): void {
    this.isServiceVisible = !this.isServiceVisible;
  }

  openDialog(): void {
    this.dialog.open(ContactUsComponent, {
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: 'fit-content',
      position: { bottom: '0px' },
      panelClass: 'custom-dialog'
    });
  }

  service(service:boolean): void {
    this.isServiceVisible = true;
    this.serviceVisible = !service;
    this.isCompany = false;
    this.isHome = false;
    this.isCompDropdown=false;
    this.onScroll();
  }

  company(route:any): void {
    this.isServiceVisible = false;
    this.isCompany = true;
    this.isHome = false;
    window.location.replace(this.config.baseUrl+route+'?page='+route);
  }

  home(): void {
    this.isServiceVisible = false;
    this.isCompany = false;
    this.isHome = true;
    window.location.href = this.config.home;
  }

  redirect(image: string): void {
    try {
      const segments = image.split('/');
      if (segments.length > 2) {
        const page = segments[2].split('.')[0];
        window.location.href = `${this.config.services}&service=${page}`;
      }
    } catch (e) {
      console.error('Invalid image path:', image);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mouseTop']) {
      this.isFixed = changes['mouseTop'].currentValue;
    }
    if(changes['isSecondPage']){
      this.secondPage = changes['isSecondPage'].currentValue;
    }
  }

  onScroll(event?: any) {
    const element = event?.target;
    const isAtBottom : boolean = element?.scrollHeight === element?.scrollTop + element?.clientHeight;
    setTimeout(() => {
      if(this.pageName==='home' && !this.isSecondPage){
        const rect : number = this.navbarwhite.nativeElement.getBoundingClientRect().height;
        this.navHeightChanged.emit({height: rect, bottomReached: isAtBottom});
      }else{
        const rect = this.navbarblack.nativeElement.getBoundingClientRect().height;
        this.navHeightChanged.emit({height: rect, bottomReached: isAtBottom});
      }
    },500);
  }
}
