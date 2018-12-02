const local_base_url = "http://localhost:8000/edna/api/";
const nectar_base_url = "https://edna.nectar.auckland.ac.nz/edna/api/";
// change active depending on the situation.
const API_URLS = {
  filtered_abundance: nectar_base_url + "abundance?otu=",
  filtered_meta: nectar_base_url + "metadata?term=",
  ordered_sampleotu: nectar_base_url + "sample_otu_ordered",
  test_sample_otu_pk: local_base_url + "abundance?otu=",
  test_nested_abundances: local_base_url + "abundance?id=",
  local_metadata_id: local_base_url + "metadata?id=",
  local_filter_options: local_base_url + "filter-options?"
};

export { API_URLS };
