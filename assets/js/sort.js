import $ from 'jquery';
import { bound as boundCategory } from 'pages/sort/category';
import { bound as boundList } from 'pages/sort/list';
import { bound as boundLoad, loadStart } from 'pages/sort/load';

$(function(){
    boundCategory();
    boundList();
    boundLoad();
    loadStart();
});
