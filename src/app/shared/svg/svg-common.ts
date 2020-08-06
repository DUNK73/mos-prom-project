import { AfterViewInit, ElementRef, Input, OnInit, Renderer2, Component, Directive } from '@angular/core';

@Directive()
export class SvgCommon implements OnInit, AfterViewInit {

	constructor(
		public renderer: Renderer2,
		public elRef: ElementRef
	) { }

	@Input()
	public width = '100%';

	@Input()
	public height = '100%';

	public ngOnInit() {
	}

	public ngAfterViewInit() {
		this.setStyle('svg', 'width', this.width);
		this.setStyle('svg', 'height', this.height);
		this.setStyle('svg', 'display', 'inline-flex');
		this.setStyle('svg', 'overflow', 'hidden');
	}

	protected setStyle(selector: string, property: string, value: string) {
		this.renderer.setStyle(this.elRef.nativeElement.querySelector(selector), property, value);
	}
}
