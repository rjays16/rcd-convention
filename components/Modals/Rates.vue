<template>
  <div class="modal fade" id="rates" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <p class="avenir-bold mb-4">Registration Rates</p>
              <table class="table table-bordered">
                <tr class="bg-dark">
                  <td width="78"></td>
                  <td width="177" class="text-white avenir-bold">Registrants</td>
                  <td width="168" class="text-white avenir-bold"><center>June 6 to July 15</center></td>
                  <td width="231" class="text-white avenir-bold"><center>July 16 to October 18</center></td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3" class="avenir-bold"><span class="marg-local">Local</span><br />(Phippines)</td>
                </tr>
                <tr>
                  <td colspan="2" class="avenir-regular">Non-PDS MDs</td>
                  <td><center>25,000 Php</center></td>
                  <td><center>35,000 Php</center></td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3" class="avenir-bold">International</td>
                </tr>
                <tr>
                  <td colspan="2" class="avenir-regular">Lads members/residents</td>
                  <td><center>$100</center></td>
                  <td><center>$200</center></td>
                </tr>
                <tr>
                  <td colspan="2" class="avenir-regular">Non-LADS members/residents</td>
                  <td><center>$300</center></td>
                  <td><center>$500</center></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-blue corner-22px text-uppercase" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Rates"
}
</script>

<style scoped>
.marg-local{
  margin-left: 3%;
}
.table-bordered{
  border-color: #888888;
}
.table tr {
  border: 1px solid #888888;
}
</style>
