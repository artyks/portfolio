import { Job } from 'bull';

type OptimisationJobResultStatus = 'FAILED' | 'SUCCESS';

type OptimisationJobInput = {
  blobName: string;
  mimetype: string;
};

type OptimisationJobResult = {
  status: OptimisationJobResultStatus;
  blobName: string;
};

type OptimisationJob = Job<OptimisationJobInput>;

export type { OptimisationJobInput, OptimisationJobResult, OptimisationJob, OptimisationJobResultStatus };
