// Interface automatically generated by schemas-to-ts

import { NotificationTemplate } from "../components/elements/NotificationTemplate";
import { Media } from "../common/Media";
import { NotificationTemplate_Plain } from "../components/elements/NotificationTemplate";
import { Media_Plain } from "../common/Media";
import { NotificationTemplate_NoRelations } from "../components/elements/NotificationTemplate";
import { AdminPanelRelationPropertyModification } from "../common/AdminPanelRelationPropertyModification";

export interface Setting {
    id: number;
    attributes: {
        createdAt: Date;
        updatedAt: Date;
        publishedAt?: Date;
        notification: NotificationTemplate[];
        homepageBanners: { data: Media[] };
        homepageCustomerPhotos: { data: Media[] };
    };
}
export interface Setting_Plain {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    notification: NotificationTemplate_Plain[];
    homepageBanners: Media_Plain[];
    homepageCustomerPhotos: Media_Plain[];
}

export interface Setting_NoRelations {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    notification: NotificationTemplate_NoRelations[];
    homepageBanners: number[];
    homepageCustomerPhotos: number[];
}

export interface Setting_AdminPanelLifeCycle {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    notification: NotificationTemplate_Plain[];
    homepageBanners: AdminPanelRelationPropertyModification<Media_Plain>[];
    homepageCustomerPhotos: AdminPanelRelationPropertyModification<Media_Plain>[];
}