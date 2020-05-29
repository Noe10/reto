$(document).ready(function () {
    $("#barraSlider").slider({
        ticks: [1, 2, 3],
        ticks_labels: ['Low', 'Medium', 'High'],
        ticks_snap_bounds: 30,
        modify_label_layout: true,
        selection: 'before'
    }).slider('setValue', 1);
    
    $('.fontsize-section').css({ display: "none" });
    $('#switchBtn').click(() => {
        setTimeout(() => $("#barraSlider").slider('relayout'), 1);
        if($('#switchBtn').prop('checked')) {
            $('.fontsize-section').slideDown(200);
        } else {
            $('.fontsize-section').slideUp(200);
        }
    });

    $("#barraSlider").on('change', () => {
        let valor = $("#barraSlider").slider('getValue');

        let valuesfontSize = {
            '1': 10,
            '2': 13,
            '3': 16
        }
        
        $('#phraseTxt').css({ fontSize: valuesfontSize[valor] });
    });
});