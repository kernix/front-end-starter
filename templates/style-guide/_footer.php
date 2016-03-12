<!-- Scripts -->
<script type="text/javascript">
  $(function() {
    var alert = $('#alert');
    alert.click(function(event) {
      swal({
        title: "Error!",
        text: "Here's my error message!",
        type: "error",
        confirmButtonText: "Cool"
      });
    });

    $('#datetimepickerinline').datetimepicker({
      inline: true,
      sideBySide: true,
      locale: 'fr',
      format: 'DD.MM.YYYY'
    });

  });
</script>
</body>

</html>
