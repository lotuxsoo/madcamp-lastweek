from .models import Question, Developer, Choice
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render, redirect
from django.db import connection, transaction
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import DeveloperSerializer, QuestionSerializer, ChoiceSerializer

def test1(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print("Received data1:", data)  # 콘솔에 데이터 출력

        value_mapping = {
            "inputValue1": {1: 12.5, 2: 8, 3: 4},
            "inputValue2": {1: 2, 2: 8, 3: 12.5, 4: 4},
            "inputValue3": {1: 8, 2: 8, 3: 4, 4: 12.5},
            "inputValue4": {1: 4, 2: 12.5, 3: 4},
            "inputValue5": {1: 2, 2: 2, 3: 12.5, 4: 8},
            "inputValue6": {1: 8, 2: 2, 3: 2, 4: 12.5},
            "inputValue7": {1: 2, 2: 2, 3: 4, 4: 12.5},
            "inputValue8": {1: 8, 2: 0, 3: 4, 4: 12.5},
        }

        result_value = sum(value_mapping[key][value] for key, value in data.items())
        response_data = {"message": f"소개팅 성공확률: {result_value}%"}  # 응답 데이터
        print(response_data)
        return JsonResponse(response_data, safe=False)
    else:
        return JsonResponse({"error": "Only POST method is supported"}, status=400)


        
def test2(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print("Received data2:", data)  # Print data to console

        value_mapping = {
            # 1:게임 2:백엔드 3:정보보안 4:프론트 5:데이터분석
            "inputValue1": {1: 1, 2: 2, 3: 3, 4: 4, 5: 5},
            "inputValue2": {1: 5, 2: 4, 3: 1, 4: 2, 5: 3},
            "inputValue3": {1: 2, 2: 5, 3: 4, 4: 3, 5: 1},
            "inputValue4": {1: 4, 2: 2, 3: 3, 4: 5, 5: 1},
            "inputValue5": {1: 2, 2: 4, 3: 5, 4: 3, 5: 1},
            "inputValue6": {1: 5, 2: 2, 3: 4, 4: 1, 5: 3},
            "inputValue7": {1: 4, 2: 2, 3: 5, 4: 4, 5: 1},
            "inputValue8": {1: 4, 2: 3, 3: 5, 4: 1, 5: 3},
            "inputValue9": {1: 4, 2: 3, 3: 2, 4: 5, 5: 1},
            "inputValue10": {1: 4, 2: 2, 3: 5, 4: 1, 5: 3},
        }

        response_data = []  # Initialize an empty list to store the values

        # Loop through each inputValue key and get the selected value from the data
        for i in range(1, 11):
            key = f"inputValue{i}"
            value = int(data.get(key))  # Convert value to integer
            if value is not None:
                response_data.append(value)

        # Count occurrences of each value in response_data
        counts = {i: response_data.count(i) for i in range(1, 6)}
        print('val',counts.values())

        # Find the key with the maximum value
        max_key = max(counts, key=counts.get)
        return JsonResponse({"max_key": max_key}, safe=False)
    else:
        return JsonResponse({"error": "Only POST method is supported"}, status=400)

        correct_count = sum(data[key] == correct_answers[key] for key in data.keys())
        response_data = {"message": correct_count}  # 응답 데이터
        print(response_data)
        return JsonResponse(response_data, safe=False)


    
def test3(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print("Received data1:", data)  # 콘솔에 데이터 출력

        value_mapping = {
            "inputValue1": {1: 12.5, 2: 8, 3: 4},
            "inputValue2": {1: 2, 2: 8, 3: 12.5, 4: 4},
            "inputValue3": {1: 8, 2: 8, 3: 4, 4: 12.5},
            "inputValue4": {1: 4, 2: 12.5, 3: 4},
            "inputValue5": {1: 2, 2: 2, 3: 12.5, 4: 8},
            "inputValue6": {1: 8, 2: 2, 3: 2, 4: 12.5},
            "inputValue7": {1: 2, 2: 2, 3: 4, 4: 12.5},
            "inputValue8": {1: 8, 2: 0, 3: 4, 4: 12.5},
        }

        result_value = sum(value_mapping[key][value] for key, value in data.items())
        response_data = {"message": f"연애 성공확률: {result_value}%"}  # 응답 데이터
        print(response_data)
        return JsonResponse(response_data, safe=False)
    else:
        return JsonResponse({"error": "Only POST method is supported"}, status=400)


def test4(request): 
    if request.method == "POST":
        data = json.loads(request.body)
        print("Received data:", data)  # 콘솔에 데이터 출력
        correct_answers = {
            "inputValue1": 2,
            "inputValue2": 4,
            "inputValue3": 3,
            "inputValue4": 2,
            "inputValue5": 4,
            "inputValue6": 2,
            "inputValue7": 3,
            "inputValue8": 1,
        }
        

        correct_count = sum(data[key] == correct_answers[key] for key in data.keys())
        response_data = {"message": correct_count}  # 응답 데이터
        print(response_data)
        return JsonResponse(response_data, safe=False)
    else:
        return JsonResponse({"error": "Only POST method is supported"}, status=400)