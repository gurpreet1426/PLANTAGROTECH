-- Table: public.orderstatuses

-- DROP TABLE IF EXISTS public.orderstatuses;

CREATE TABLE IF NOT EXISTS public.orderstatuses
(
    orderstatusid uuid NOT NULL,
	orderstatusstatusname character(255) COLLATE pg_catalog."default" NOT NULL,	
	orderstatus character(255) COLLATE pg_catalog."default" NOT NULL,	
	authorid uuid,	
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT orderstatus_pkey PRIMARY KEY (orderstatusid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orderstatuses
    OWNER to postgres;