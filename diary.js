// // 저장된 일기를 객체로 관리
// let diaryEntries = {};

// // 선택한 날짜를 저장하는 변수
// let selectedDate = null;

// // 폼 제출 이벤트 핸들러
// document.getElementById("diaryForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // 기본 제출 동작 방지

//     // 입력된 날짜 가져오기
//     const date = document.getElementById("date").value;

//     // 입력된 일기 내용 가져오기
//     const diaryEntry = document.getElementById("diaryEntry").value;

//     // 해당 날짜에 일기 내용 저장
//     diaryEntries[date] = diaryEntry;

//     // 입력 필드 초기화
//     document.getElementById("date").value = "";
//     //  document.getElementById("diaryEntry").value = "";

//     // 일기 저장하기
//     saveDiaryEntries();

//     // 저장된 일기 표시
//     displayDiaryEntries();
// });

// // 일기 저장 함수
// function saveDiaryEntries() {
//     localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
// }

// // 저장된 일기 표시 함수
// function displayDiaryEntries() {
//     const diaryList = document.getElementById("diaryList");
//     diaryList.innerHTML = "";

//     for (const date in diaryEntries) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `<strong>${date}:</strong> ${diaryEntries[date]}`;

//         // 일기 아이템을 클릭하면 해당 일기를 편집할 수 있도록 이벤트 핸들러 추가
//         listItem.addEventListener("click", function () {
//             editDiaryEntry(date, diaryEntries[date]);
//         });

//         diaryList.appendChild(listItem);
//     }
// }

// // 일기 수정 함수
// function editDiaryEntry(date, entry) {
//     selectedDate = date;

//     // 선택한 일기를 편집 폼에 채우고 수정 버튼 활성화
//     document.getElementById("date").value = date;
//     document.getElementById("diaryEntry").value = entry;
//     document.getElementById("saveButton").style.display = "none";
//     document.getElementById("editButton").style.display = "block";
//     document.getElementById("editButton").disabled = false;
// }

// // 수정 버튼 클릭 시 일기 업데이트
// document.getElementById("editButton").addEventListener("click", function () {
//     const updatedDate = document.getElementById("date").value;
//     const updatedEntry = document.getElementById("diaryEntry").value;

//     // 선택한 날짜의 일기 업데이트
//     diaryEntries[selectedDate] = updatedEntry;

//     // 입력 필드 초기화 및 버튼 상태 업데이트
//     document.getElementById("date").value = "";
//     document.getElementById("diaryEntry").value = "";
//     document.getElementById("saveButton").style.display = "block";
//     document.getElementById("editButton").style.display = "none";
//     document.getElementById("editButton").disabled = true;

//     // 일기 저장하기
//     saveDiaryEntries();

//     // 저장된 일기 표시
//     displayDiaryEntries();
// });

// // 페이지 로드 시 저장된 일기를 로드하고 표시
// window.onload = function () {
//     const savedEntries = localStorage.getItem("diaryEntries");
//     if (savedEntries) {
//         diaryEntries = JSON.parse(savedEntries);
//         displayDiaryEntries();
//     }
// };
// // 페이지 로드 시 저장된 일기를 로드하고 표시
// window.onload = function () {
//     const savedEntries = localStorage.getItem("diaryEntries");
//     if (savedEntries) {
//         diaryEntries = JSON.parse(savedEntries);
//         displayDiaryEntries();
//     }

//     // 이전에 선택한 날짜를 가져와서 선택된 날짜로 설정
//     const selectedDateFromStorage = localStorage.getItem("selectedDate");
//     if (selectedDateFromStorage) {
//         selectedDate = selectedDateFromStorage;
//     }

//     // 이전에 선택한 날짜가 있다면 해당 날짜의 일기 내용을 편집 폼에 채우고 수정 버튼 활성화
//     if (selectedDate && diaryEntries[selectedDate]) {
//         editDiaryEntry(selectedDate, diaryEntries[selectedDate]);
//     }
// };

// // 폼 제출 이벤트 핸들러
// document.getElementById("diaryForm").addEventListener("submit", function (e) {
//     e.preventDefault(); // 기본 제출 동작 방지

//     // 입력된 날짜 가져오기
//     const date = document.getElementById("date").value;

//     // 입력된 일기 내용 가져오기
//     const diaryEntry = document.getElementById("diaryEntry").value;

//     // 해당 날짜에 일기 내용 저장
//     diaryEntries[date] = diaryEntry;

//     // 입력 필드 초기화
//     document.getElementById("date").value = "";
//     document.getElementById("diaryEntry").value = "";

//     // 일기 저장하기
//     saveDiaryEntries();

//     // 선택한 날짜를 로컬 스토리지에 저장
//     localStorage.setItem("selectedDate", date);

//     // 저장된 일기 표시
//     displayDiaryEntries();
// });
// 저장된 일기를 객체로 관리
// 페이지 로드 시 저장된 일기를 로드하고 표시
window.onload = function () {
    const savedEntries = localStorage.getItem("diaryEntries");
    if (savedEntries) {
        diaryEntries = JSON.parse(savedEntries);
        displayDiaryEntries();
    }
};

let diaryEntries = {};

// 선택한 날짜를 저장하는 변수
let selectedDate = null;

// 폼 제출 이벤트 핸들러
document.getElementById("diaryForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 제출 동작 방지

    // 입력된 날짜 가져오기
    const date = document.getElementById("date").value;

    // 입력된 일기 내용 가져오기
    const diaryEntry = document.getElementById("diaryEntry").value;

    // 해당 날짜에 일기 내용 저장
    diaryEntries[date] = diaryEntry;

    // 입력 필드 초기화
    document.getElementById("date").value = "";
    document.getElementById("diaryEntry").value = "";

    // 일기 저장하기
    saveDiaryEntries();

    // 저장된 일기 표시
    displayDiaryEntries();
});

// 일기 저장 함수
function saveDiaryEntries() {
    localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
}

// 저장된 일기 표시 함수
function displayDiaryEntries() {
    const diaryList = document.getElementById("diaryList");
    diaryList.innerHTML = "";

    for (const date in diaryEntries) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${date}:</strong> ${diaryEntries[date]}`;

        // 일기 아이템을 클릭하면 해당 일기를 편집할 수 있도록 이벤트 핸들러 추가
        listItem.addEventListener("click", function () {
            editDiaryEntry(date, diaryEntries[date]);
        });

        diaryList.appendChild(listItem);
    }
}

// 일기 수정 함수
function editDiaryEntry(date, entry) {
    selectedDate = date;

    // 선택한 일기를 편집 폼에 채우고 수정 버튼 활성화
    document.getElementById("date").value = date;
    document.getElementById("diaryEntry").value = entry;
    document.getElementById("saveButton").style.display = "none";
    document.getElementById("editButton").style.display = "block";
    document.getElementById("editButton").disabled = false;
}

// 수정 버튼 클릭 시 일기 업데이트
document.getElementById("editButton").addEventListener("click", function () {
    const updatedDate = document.getElementById("date").value;
    const updatedEntry = document.getElementById("diaryEntry").value;

    // 선택한 날짜의 일기 업데이트
    diaryEntries[selectedDate] = updatedEntry;

    // 입력 필드 초기화 및 버튼 상태 업데이트
    document.getElementById("date").value = "";
    document.getElementById("diaryEntry").value = "";
    document.getElementById("saveButton").style.display = "block";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("editButton").disabled = true;

    // 일기 저장하기
    saveDiaryEntries();

    // 저장된 일기 표시
    displayDiaryEntries();
});

