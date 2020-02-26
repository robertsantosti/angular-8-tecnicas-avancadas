import { Injectable } from "@angular/core";
import { ConfigParams } from "../shared/models/config-params";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConfigParamsService {
  constructor() {}

  configurationParams(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams();
    if (config.page) {
      httpParams = httpParams.set("_page", config.page.toString());
    }

    if (config.limit) {
      httpParams = httpParams.set("_limit", config.limit.toString());
    }

    if (config.search) {
      httpParams = httpParams.set("q", config.search);
    }
    if (config.otherSearch) {
      httpParams = httpParams.set(
        config.otherSearch.type,
        config.otherSearch.value.toString()
      );
    }
    httpParams = httpParams.set("_sort", "id");
    httpParams = httpParams.set("_order", "desc");

    return httpParams;
  }
}
