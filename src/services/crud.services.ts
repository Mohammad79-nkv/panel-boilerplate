import { ApiPayload } from "@/model/service/api-payload.model";
import { ApiResponse } from "@/model/service/api-response.model";
import { BaseService } from "./_base-service";

export abstract class CrudTmForumService<
  EntityModel,
  EntityCreateModel,
  EntityUpdateModel
> extends BaseService {
  abstract entityBaseUrl: string;
  abstract versionName: string;
  abstract entityName?: string;

  create(payload: EntityCreateModel) {
    return this.axiosInstanceWithToken.post(
      `/${this.entityBaseUrl}/${this.versionName}/${this.entityName}`,
      payload
    );
  }

  update(payload: EntityUpdateModel, entityId: string) {
    return this.axiosInstanceWithToken.put(
      `/${this.entityBaseUrl}/${this.versionName}/${this.entityName}/${entityId}`,
      payload
    );
  }

  updatePatch(payload: EntityUpdateModel, entityId: string | null) {
    return this.axiosInstanceWithToken.patch(
      `/${this.entityBaseUrl}/${this.versionName}/${this.entityName}/${entityId}`,
      payload
    );
  }

  getList(payload?: ApiPayload): Promise<ApiResponse<Array<EntityModel>>> {
    return this.axiosInstanceWithToken.get(
      `/${this.entityBaseUrl}/${this.versionName}/${this.entityName}`,
      { params: payload }
    );
  }

  getListWithOutToken(): any {
    return this.axiosInstanceWithoutToken.get(
      `/${this.entityBaseUrl}`
    );
  }

  getById(entityId: string): Promise<ApiResponse<EntityModel>> {
    return this.axiosInstanceWithToken.get(
      `/${this.entityBaseUrl}/${this.versionName}/${this.entityName}/${entityId}`
    );
  }

  delete(entityId: string | undefined) {
    return this.axiosInstanceWithToken.delete(
      `/${this.entityBaseUrl}/${this.versionName}/${this.entityName}/${entityId}`
    );
  }
}
