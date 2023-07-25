from django.shortcuts import render
from .models import Question, Developer, Choice
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.


def home_view(request):
    return render(request, "home.html")


def index(request):
    developers = Developer.objects.all()

    context = {
        "developers": developers,
    }

    return render(request, "index.html", context=context)


def form(request):
    questions = Question.objects.all()

    context = {
        "questions": questions,
    }

    return render(request, "form.html", context=context)


def result(request):
    # 문항 수
    N = Question.objects.count()
    # 개발자 유형 수
    K = Developer.objects.count()

    # 개발유형마다 몇개인지 저장할 리스트 counter[1] = 1번 유형점수(개수)
    counter = [0] * (K + 1)

    for n in range(1, N + 1):
        developer_id = int(request.POST[f"question-{n}"][0])
        counter[developer_id] += 1

    # 최고점 개발 유형
    best_developer_id = max(range(1, K + 1), key=lambda id: counter[id])
    best_developer = Developer.objects.get(pk=best_developer_id)
    best_developer.count += 1
    best_developer.save()

    context = {
        "developer": best_developer,
        "counter": counter,
    }

    return render(request, "result.html", context=context)


def test1(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print("Received data:", data)  # 콘솔에 데이터 출력

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

        return JsonResponse(response_data, safe=False)
    else:
        return JsonResponse({"error": "Only POST method is supported"}, status=400)
