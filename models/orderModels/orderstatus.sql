-- Table: public.orderstatus

-- DROP TABLE IF EXISTS public.orderstatus;

CREATE TABLE IF NOT EXISTS public.orderstatus
(
    orderstatusid uuid NOT NULL,
	orderStatusstatusname character(255) COLLATE pg_catalog."default" NOT NULL,	
	orderstatus character(255) COLLATE pg_catalog."default" NOT NULL,	
	authorid uuid,	
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT orderstatus_pkey PRIMARY KEY (orderstatusid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orderstatus
    OWNER to postgres;