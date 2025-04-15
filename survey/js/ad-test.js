document.addEventListener('DOMContentLoaded', function() {
    // 변수 초기화
    let currentQuestion = 1;
    const totalQuestions = 10;
    const scores = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'E': 0
    };
    // 요소 참조
    const startSection = document.getElementById('start-section');
    const quizSection = document.getElementById('quiz-section');
    const resultSection = document.getElementById('result-section');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const questionItems = document.querySelectorAll('.question-item');
    // 시작 버튼 이벤트
    document.getElementById('start-test-btn').addEventListener('click', function() {
    startSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    updateQuestion();
    });
    // 다음 버튼 이벤트
    nextBtn.addEventListener('click', function() {
    const currentQuestionItem = document.querySelector(`.question-item[data-question-id="${currentQuestion}"]`);
    const selectedOption = currentQuestionItem.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (!selectedOption) {
    alert('답변을 선택해주세요.');
    return;
    }
    // 점수 저장
    const category = currentQuestionItem.getAttribute('data-category');
    scores[category] += parseInt(selectedOption.value);
    if (currentQuestion < totalQuestions) {
    currentQuestion++;
    updateQuestion();
    } else {
    // 결과 페이지로 이동
    showResults();
    }
    });
    // 이전 버튼 이벤트
    prevBtn.addEventListener('click', function() {
    if (currentQuestion > 1) {
    currentQuestion--;
    updateQuestion();
    }
    });
    // 질문 업데이트 함수
    function updateQuestion() {
    // 모든 질문 숨기기
    questionItems.forEach(item => {
    item.classList.add('hidden');
    });
    // 현재 질문 표시
    const currentQuestionItem = document.querySelector(`.question-item[data-question-id="${currentQuestion}"]`);
    currentQuestionItem.classList.remove('hidden');
    // 진행 상태 업데이트
    progressBar.style.width = `${(currentQuestion / totalQuestions) * 100}%`;
    progressText.textContent = `${currentQuestion}/${totalQuestions}`;
    // 이전/다음 버튼 상태 업데이트
    if (currentQuestion === 1) {
    prevBtn.classList.add('hidden');
    } else {
    prevBtn.classList.remove('hidden');
    }
    if (currentQuestion === totalQuestions) {
    nextBtn.textContent = '결과 보기';
    } else {
    nextBtn.innerHTML = '다음<i class="ri-arrow-right-line ml-2"></i>';
    }
    }
    // 결과 표시 함수
    function showResults() {
      quizSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
    
      const gradeMap = {
        4: {
          label: '매우 우수',
          badge: 'grade-5',
          desc: {
            A: '고객의 시선을 단번에 사로잡는 카피입니다. 이 흐름을 그대로 유지하세요.',
            B: '타겟에 맞는 언어와 공감 요소가 탁월합니다. 현 상태를 유지하는 것이 좋습니다.',
            C: '설득 흐름이 매끄럽고 전환 유도까지 자연스럽게 이어집니다.',
            D: '제안의 매력과 CTA 유도력이 강합니다. 성과도 높을 것으로 보입니다.',
            E: '전환 추적과 광고 세팅이 정교하게 작동 중입니다. 안정적인 운영이 가능합니다.'
          }
        },
        3: {
          label: '우수',
          badge: 'grade-4',
          desc: {
            A: '',
            B: '',
            C: '',
            D: '',
            E: ''
          }
        },
        2: {
          label: '보통',
          badge: 'grade-3',
          desc: {
            A: '',
            B: '',
            C: '',
            D: '',
            E: ''
          }
        },
        1: {
          label: '부족',
          badge: 'grade-2',
          desc: {
            A: '',
            B: '',
            C: '',
            D: '',
            E: ''
          }
        },
        0: {
          label: '매우 부족',
          badge: 'grade-1',
          desc: {
            A: '',
            B: '',
            C: '',
            D: '',
            E: ''
          }
        }
      };
    
      const issueMap = {
        A: '광고 카피 & 후킹력',
        B: '타겟 인식 & 공감 설계',
        C: '랜딩 구조 & 설득 흐름',
        D: '오퍼 & CTA',
        E: '광고 세팅 & 전환 추적'
      };
    
      const improvementMap = {
        A: '감정을 움직이는 카피 구성을 보완할 필요가 있습니다. 고객의 어려움이나 혜택, 원하는 미래에 맞는 혜택을 잘 조합해보세요!',
        B: '타겟을 구체화하고 그들의 언어로 말해보세요. 여러분이 바라는 고객은 정확하게 어떤 사람인지 더 구체적으로 정의해보세요',
        C: '글의 흐름이 일관적인지, 고객이 자연스럽게 몰입하고 설득되는지 살펴보는 것이 중요합니다. 설득 구조를 점검하세요. ',
        D: '상품의 제안이 고객의 문제와 부합한지 살펴봐주세요. 제안의 매력도를 높이고 CTA 위치나 문구를 조정해보세요.',
        E: '성과 추적 및 세팅을 점검해 최적의 광고 환경을 만들어야 합니다. 그렇지 않으면 어디서 고객이 반응하고 좋아하는지 알 수 없습니다.'
      };
    
      // 각 카드 점수 표시
      document.querySelectorAll('.result-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent?.trim();
        if (!title) return;
    
        const match = title.match(/^([A-E])\./);
        if (!match) return;
    
        const category = match[1];
        const rawScore = scores[category];
        const displayScore = 4 - rawScore;
        const gradeInfo = gradeMap[displayScore];
        if (!gradeInfo) return;
    
        const scoreDiv = card.querySelector('.text-3xl');
        if (scoreDiv) scoreDiv.textContent = `${displayScore}점`;
    
        const badge = card.querySelector('.grade-badge');
        if (badge) {
          badge.textContent = gradeInfo.label;
          badge.classList.remove('grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5');
          badge.classList.add(gradeInfo.badge);
        }
    
        const desc = card.querySelector('p.text-gray-600');
        if (desc) {
          // 4점은 칭찬, 나머지는 개선 코멘트 출력
          if (displayScore === 4) {
            desc.textContent = gradeInfo.desc[category];
          } else {
            desc.textContent = improvementMap[category];
          }
        }
      });
    
      // 종합 평가 문구
      const sorted = Object.entries(scores)
        .map(([key, value]) => ({ category: key, displayScore: 4 - value }));
    
      const allPerfect = sorted.every(item => item.displayScore === 4);
    
      const summaryPara = document.querySelector('.md\\:w-1\\/2.md\\:pl-8 p.text-gray-600');
      const adviceBox = document.querySelector('.md\\:w-1\\/2.md\\:pl-8 .bg-blue-50 p.text-primary');
    
      if (allPerfect) {
        if (summaryPara)
          summaryPara.innerHTML = `🎯 <span class="font-semibold text-secondary">모든 항목에서 4점</span>을 획득하셨습니다. 광고 포인트가 상당히 잘 잡힌 상태입니다.`;
        if (adviceBox)
          adviceBox.textContent = `지금 구조를 유지한 채 더 많은 실험과 광고 테스트를 확장해보세요. 아주 훌륭한 성과입니다!`;
      } else {
        const categoryComments = sorted
          .filter(({ displayScore }) => displayScore < 4)
          .map(({ category }) => {
            const name = issueMap[category];
            return `<li><span class="font-semibold">${name}</span>: ${improvementMap[category]}</li>`;
          }).join('');
    
        if (summaryPara)
          summaryPara.innerHTML = `아래는 개선이 필요한 영역입니다:<ul class="list-disc pl-5 mt-2 text-sm text-gray-700">${categoryComments}</ul>`;
    
        const worst = sorted.sort((a, b) => a.displayScore - b.displayScore).slice(0, 2);
        const worstCategoriesText = worst.map(w => issueMap[w.category]).join(',  ');
        const actionText = worst.map(w => improvementMap[w.category]).join(' ');
    
        if (adviceBox)
          adviceBox.innerHTML = `성과 향상을 위해 <span class="font-semibold text-secondary">${worstCategoriesText}</span> 영역을 우선 점검해보세요. ${actionText}`;
      }
    
      // 차트 렌더링
      requestAnimationFrame(() => {
        initRadarChart();
        setTimeout(() => {
          const chart = echarts.getInstanceByDom(document.getElementById('radar-chart'));
          if (chart) chart.resize();
        }, 50);
      });
    
      window.scrollTo(0, 0);
    }
    
    
    
    // 레이더 차트 초기화
    // 팁 모달 관련 데이터
    const tipData = {
    'A': {
    title: '광고 카피 & 후킹력 개선 가이드',
    expert: {
    name: '김서연',
    title: '디지털 카피라이팅 전문가 | 10년 경력',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20marketing%20expert%20in%20business%20attire%2C%20confident%20pose%2C%20studio%20lighting&width=100&height=100&seq=5&orientation=squarish'
    },
    content: [
    '현재 광고 카피는 정보 전달에만 집중되어 있어 고객의 감정적 반응을 이끌어내지 못하고 있습니다. 첫 문장에서 고객의 관심을 사로잡기 위해서는 다음과 같은 요소들을 고려해야 합니다.',
    '고객의 페인포인트를 직접적으로 건드리는 질문이나 상황 제시로 시작하세요. 예를 들어 "매달 마케팅 비용만 늘어나고 성과는 제자리인가요?" 와 같이 구체적인 고민을 언급하면 주목도가 높아집니다.'
    ],
    actionPoints: [
    '첫 3초 내 핵심 가치 전달하기',
    '고객의 실제 언어 사용하기',
    '감정적 트리거 포인트 추가하기',
    'A/B 테스트로 최적의 후킹 문구 찾기'
    ]
    },
    'B': {
    title: '타겟 인식 & 공감 설계 전략',
    expert: {
    name: '박준호',
    title: '퍼소나 전략 컨설턴트 | 구글 애즈 전문가',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20marketing%20consultant%2C%20business%20casual%2C%20modern%20office%20background&width=100&height=100&seq=6&orientation=squarish'
    },
    content: [
    '현재 광고는 타겟층이 모호하여 메시지의 효과가 분산되고 있습니다. 명확한 타겟 설정과 그들만의 특별한 니즈를 반영한 커뮤니케이션이 필요합니다.',
    '실제 고객 인터뷰나 데이터 분석을 통해 핵심 타겟의 특성을 정의하고, 그들의 구체적인 상황과 고민을 광고에 반영해야 합니다.'
    ],
    actionPoints: [
    '핵심 타겟 페르소나 3개 정의하기',
    '타겟별 주요 고민과 니즈 매핑하기',
    '고객 언어 데이터베이스 구축하기',
    '타겟별 맞춤 메시지 전략 수립하기'
    ]
    },
    'C': {
    title: '랜딩 구조 & 설득 흐름 최적화',
    expert: {
    name: '이현지',
    title: '전환율 최적화 전문가 | CRO 컨설턴트',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20UX%20designer%2C%20smart%20casual%2C%20creative%20office%20setting&width=100&height=100&seq=7&orientation=squarish'
    },
    content: [
    '현재 랜딩페이지는 정보의 흐름이 논리적이지 않아 전환을 방해하고 있습니다. 방문자가 자연스럽게 구매 결정으로 이어질 수 있도록 단계적인 설득 구조가 필요합니다.',
    '문제 인식 → 해결책 제시 → 제품/서비스 가치 → 사회적 증거 → 행동 유도 순으로 콘텐츠를 재구성하세요.'
    ],
    actionPoints: [
    'F-패턴 기반의 콘텐츠 배치하기',
    '스크롤 히트맵 분석으로 주요 섹션 최적화',
    '핵심 가치 제안을 상단에 배치하기',
    '단계별 마이크로 전환 설계하기'
    ]
    },
    'D': {
    title: '오퍼 & CTA 전략',
    expert: {
    name: '최동현',
    title: '디지털 마케팅 전략가 | 전환율 개선 전문가',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20digital%20strategist%2C%20modern%20professional%20look%2C%20tech%20office%20background&width=100&height=100&seq=8&orientation=squarish'
    },
    content: [
    '현재 오퍼가 고객에게 충분한 가치를 전달하지 못하고 있으며, CTA의 시각적 우선순위와 문구가 행동 유도에 효과적이지 않습니다.',
    '고객이 즉시 행동할 수 있도록 명확한 가치 제안과 함께 시간 제한, 한정 수량 등의 희소성 요소를 추가하세요.'
    ],
    actionPoints: [
    '핵심 베네핏 중심의 오퍼 재구성',
    'FOMO 요소 추가하기',
    'CTA 버튼 디자인 및 위치 최적화',
    '리스크 해소 요소 강화하기'
    ]
    },
    'E': {
    title: '광고 세팅 & 전환 추적 최적화',
    expert: {
    name: '정미래',
    title: '퍼포먼스 마케팅 전문가 | 데이터 애널리스트',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20data%20analyst%2C%20business%20professional%2C%20analytics%20dashboard%20background&width=100&height=100&seq=9&orientation=squarish'
    },
    content: [
    '기본적인 전환 추적은 설정되어 있으나, 세그먼트별 성과 분석과 최적화가 미흡합니다. 보다 정교한 데이터 수집과 활용이 필요합니다.',
    '고객 여정의 각 단계별 마이크로 전환을 설정하고, 채널별/디바이스별 성과를 정확하게 측정할 수 있도록 추적 코드를 보완하세요.'
    ],
    actionPoints: [
    '전환 퍼널 단계별 추적 설정하기',
    '세그먼트별 맞춤 전략 수립하기',
    'ROAS 기반 예산 최적화하기',
    '리마케팅 대상 세분화하기'
    ]
    }
    };
    // 팁 모달 표시 함수
    function showTipModal(category) {
    const modal = document.getElementById('tipModal');
    const data = tipData[category];
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('expertImage').src = data.expert.image;
    document.getElementById('expertName').textContent = data.expert.name;
    document.getElementById('expertTitle').textContent = data.expert.title;
    const tipContent = document.getElementById('tipContent');
    tipContent.innerHTML = data.content.map(text => `<p>${text}</p>`).join('');
    const actionPoints = document.getElementById('actionPoints');
    actionPoints.innerHTML = data.actionPoints.map(point => `<li class="flex items-start"><i class="ri-checkbox-circle-line text-primary mr-2 mt-1"></i>${point}</li>`).join('');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    }
    // 팁 모달 닫기 함수
    function closeTipModal() {
    const modal = document.getElementById('tipModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    }
    function initRadarChart() {
      const chartDom = document.getElementById('radar-chart');
      const myChart = echarts.init(chartDom);
    
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 420;
      const radius = isMobile ? 80 : '70%'; // 퍼센트로 반응형 설정
    
      const option = {
        animation: false,
        tooltip: {
          confine: true,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#ccc',
          textStyle: {
            color: '#1f2937',
            fontSize: isMobile ? 11 : 13
          }
        },
        radar: {
          radius: radius,
          indicator: [
            { name: '광고카피 후킹', max: 4 },
            { name: '타겟인식 공감설계', max: 4 },
            { name: '랜딩구조 설득흐름', max: 4 },
            { name: '오퍼 CTA', max: 4 },
            { name: '광고세팅 전환추적', max: 4 }
          ],
          axisName: {
            color: '#1f2937',
            fontSize: isMobile ? 10 : 12,
            formatter: function (name) {
              // 2줄 이상 자동 줄바꿈
              const maxLineLength = isMobile ? 7 : 9;
              return name
                .split(' ')
                .map(line => {
                  if (line.length > maxLineLength) {
                    return line.replace(new RegExp(`(.{${maxLineLength}})`, 'g'), '$1\n');
                  }
                  return line;
                })
                .join('\n');
            }
          }
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [
                  4 - scores['A'],
                  4 - scores['B'],
                  4 - scores['C'],
                  4 - scores['D'],
                  4 - scores['E']
                ],
                areaStyle: { color: 'rgba(87, 181, 231, 0.1)' },
                lineStyle: { color: 'rgba(87, 181, 231, 1)', width: 2 },
                itemStyle: { color: 'rgba(87, 181, 231, 1)' }
              }
            ]
          }
        ]
      };
    
      myChart.setOption(option);
    
      // 반응형 리사이즈 처리
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
    
    
    // 옵션 카드 선택 효과
    document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function() {
    // 같은 질문 내의 다른 카드 선택 해제
    const questionId = this.closest('.question-item').getAttribute('data-question-id');
    document.querySelectorAll(`.question-item[data-question-id="${questionId}"] .option-card`).forEach(c => {
    c.classList.remove('selected');
    });
    // 현재 카드 선택
    this.classList.add('selected');
    });
    });
    });