package com.minatoorgtestcase.gitwarningfail.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;
import com.vs.rappit.base.factory.InstanceFactory;
import com.minatoorgtestcase.gitwarningfail.base.controller.ApplicationUserBaseController;
import com.minatoorgtestcase.gitwarningfail.service.IApplicationUserService;
import com.minatoorgtestcase.gitwarningfail.service.ApplicationUserService;
import com.minatoorgtestcase.gitwarningfail.model.ApplicationUser;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
@RestController
@RequestMapping(path = "/rest/applicationusers/", produces = "application/json")
public class ApplicationUserController extends ApplicationUserBaseController<IApplicationUserService<ApplicationUser>, ApplicationUser> {

	public ApplicationUserController(ApplicationUserService applicationUserService) {
		super(applicationUserService);
	}
	
		
	
	
}
