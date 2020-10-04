<script>
  import L from "leaflet";
import { afterUpdate } from "svelte";
import { bind } from "svelte/internal";
  import { ipt } from "../../stores/apiStore";
  import {fetchApi} from "../../services/fetchApi"

  let map;
  let InputValue;

  afterUpdate(() => {
    const container = L.DomUtil.get("mapId");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("mapId").setView($ipt,13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );
  })

  const handleInputSubmit = () => {
    fetchApi(InputValue)
    console.log($ipt)
  }


</script>

<form on:submit|preventDefault={handleInputSubmit}>
  <input type="text" bind:value={InputValue}>
  <button>search</button>
</form>


<div id="mapId" style="height: 90vh"></div>
