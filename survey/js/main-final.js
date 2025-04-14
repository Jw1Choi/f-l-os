// 차트 초기화
document.addEventListener('DOMContentLoaded', function() {
    const chartDom = document.getElementById('conversionChart');
    const myChart = echarts.init(chartDom);
    const option = {
    animation: false,
    tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: '#eee',
    borderWidth: 1,
    textStyle: {
    color: '#1f2937'
    }
    },
    legend: {
    data: ['개선 전', '개선 후'],
    textStyle: {
    color: '#1f2937'
    }
    },
    grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
    },
    xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1주차', '2주차', '3주차', '4주차', '5주차', '6주차'],
    axisLine: {
    lineStyle: {
    color: '#ddd'
    }
    },
    axisLabel: {
    color: '#1f2937'
    }
    },
    yAxis: {
    type: 'value',
    name: '전환율 (%)',
    nameTextStyle: {
    color: '#1f2937'
    },
    axisLine: {
    lineStyle: {
    color: '#ddd'
    }
    },
    axisLabel: {
    color: '#1f2937',
    formatter: '{value}%'
    },
    splitLine: {
    lineStyle: {
    color: '#eee'
    }
    }
    },
    series: [
    {
    name: '개선 전',
    type: 'line',
    stack: 'Total',
    data: [0.4, 0.6, 0.5, 0.3, 0.7, 0.5],
    smooth: true,
    symbol: 'none',
    lineStyle: {
    width: 3,
    color: 'rgba(252, 141, 98, 1)'
    },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
    offset: 0,
    color: 'rgba(252, 141, 98, 0.2)'
    },
    {
    offset: 1,
    color: 'rgba(252, 141, 98, 0.05)'
    }
    ])
    }
    },
    {
    name: '개선 후',
    type: 'line',
    stack: 'Total',
    data: [1.2, 2.5, 3.1, 3.7, 4.2, 4.5],
    smooth: true,
    symbol: 'none',
    lineStyle: {
    width: 3,
    color: 'rgba(87, 181, 231, 1)'
    },
    areaStyle: {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
    offset: 0,
    color: 'rgba(87, 181, 231, 0.2)'
    },
    {
    offset: 1,
    color: 'rgba(87, 181, 231, 0.05)'
    }
    ])
    }
    }
    ]
    };
    myChart.setOption(option);
    // 반응형 차트
    window.addEventListener('resize', function() {
    myChart.resize();
    });
    });
    
    document.addEventListener('DOMContentLoaded', function() {
    // 숫자 카운팅 애니메이션
    const countElements = document.querySelectorAll('[data-count]');
    function animateCount(el, start, end, duration) {
    let startTime = null;
    function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    el.textContent = value.toLocaleString();
    if (progress < 1) {
    requestAnimationFrame(animation);
    } else {
    el.textContent = end.toLocaleString();
    }
    }
    requestAnimationFrame(animation);
    }
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    const el = entry.target;
    const count = parseInt(el.getAttribute('data-count'));
    animateCount(el, 0, count, 2000);
    observer.unobserve(el);
    }
    });
    }, { threshold: 0.5 });
    countElements.forEach(el => {
    observer.observe(el);
    });
    });