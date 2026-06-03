export type ViewId =
  | 'empty'
  | 'modal'
  | 'campaign-upload'
  | 'campaign-linkedin'
  | 'campaign-compact';

export type CampaignViewId = 'campaign-upload' | 'campaign-linkedin' | 'campaign-compact';

export interface PreviewView {
  id: ViewId;
  label: string;
  shortLabel: string;
  breadcrumb: string[];
  homeIcon?: boolean;
}

export interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

export interface WorkflowMode {
  id: string;
  title: string;
  badge?: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface ImportOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  helper?: string;
  footer?: string;
}

export interface CampaignPreset {
  selectedImport: string;
  compact: boolean;
  firstStepDone: boolean;
}

export interface CampaignStep {
  title: string;
  icon: string;
  active?: boolean;
}
