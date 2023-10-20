from django.http import HttpResponse
from django.shortcuts import redirect, reverse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def jamshid(request):
    return HttpResponse("jamshid... jamshid...")

def jamshi(request):
    return redirect('jamshid')
