-- Table: public.productdetail

-- DROP TABLE IF EXISTS public.productdetail;

CREATE TABLE IF NOT EXISTS public.productdetail
(
    pdid uuid NOT NULL,
	pid character(255) COLLATE pg_catalog."default" NOT NULL,
	producvediourl  json DEFAULT '{}'::json,
	plantinstructions character(255) COLLATE pg_catalog."default" NOT NULL,	
	organizationid uuid,
	authorid uuid,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT productdetail_pkey PRIMARY KEY (pdid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.productdetail
    OWNER to postgres;