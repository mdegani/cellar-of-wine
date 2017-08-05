import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class WineCommonModule { }
