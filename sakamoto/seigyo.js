// JavaScript Document

$(function(){
$('.j-checkout__tax-label').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('消費税','（内税）'));
});
});

$(function(){
$('.j-checkout__heading').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('お客様の情報','ご予約代表者様の情報'));
});
});

$(function(){
$('ol#cc-checkout-steps').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('お届け先','お客様情報'));
});
});

$(function(){
$('.cc-checkout-steps-ready').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('お届け先','お客様情報'));
});
});

$(function(){
$('.cc-checkout-steps-ready').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('お届け先','お客様情報'));
});
});

$(function(){
$('.j-checkout__withdrawal-checkbox-label').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('キャンセル期限までにサービスが開始となることを要望します。また、サービスが開始となった時点でキャンセルできなくなる事に同意します。','参加条件およびキャンセル・中止規定に同意し、予約を確定します。'));
});
});

$(function(){
$('.j-checkout__warning').each(function(){
var txt = $(this).html();
$(this).html(txt.replace('契約解約条件への同意をお願いします。','エラー：参加条件およびキャンセル・中止規定に同意をお願いします。'));
});
});