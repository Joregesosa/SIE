<?php

namespace App\Providers;

use Microsoft\Graph\Core\Authentication\GraphPhpLeagueAccessTokenProvider;
use Microsoft\Graph\Generated\Models;
use Microsoft\Graph\Generated\Models\User as GraphUser;
use Microsoft\Graph\Generated\Models\UserCollectionResponse;
use Microsoft\Graph\Generated\Users\UsersRequestBuilderGetQueryParameters;
use Microsoft\Graph\Generated\Users\UsersRequestBuilderGetRequestConfiguration;
use Microsoft\Graph\Graph;
use Microsoft\Graph\GraphServiceClient;
use Microsoft\Kiota\Authentication\Oauth\ClientCredentialContext;

use function PHPSTORM_META\map;

class GraphHelper
{

    private static string $clientId = '';
    private static string $clientSecret = '';
    private static string $tenantId = '';
    private static ClientCredentialContext $tokenContext;
    private static GraphServiceClient $appClient;

    public static function initializeGraphForAppOnlyAuth(): void
    {
        GraphHelper::$clientId = $_ENV['CLIENT_ID'];
        GraphHelper::$clientSecret = $_ENV['CLIENT_SECRET'];
        GraphHelper::$tenantId = $_ENV['TENANT_ID'];

        GraphHelper::$tokenContext = new ClientCredentialContext(
            GraphHelper::$tenantId,
            GraphHelper::$clientId,
            GraphHelper::$clientSecret
        );

        GraphHelper::$appClient = new GraphServiceClient(
            GraphHelper::$tokenContext,
            ['https://graph.microsoft.com/.default']
        );
    }
    public static function getAppOnlyToken(): string {
        // Create an access token provider to get the token
        $tokenProvider = new GraphPhpLeagueAccessTokenProvider(GraphHelper::$tokenContext);
        return $tokenProvider
            ->getAuthorizationTokenAsync('https://graph.microsoft.com')
            ->wait();
    }

    public static function getUsers() {

        $configuration = new UsersRequestBuilderGetRequestConfiguration();
        $configuration->queryParameters = new UsersRequestBuilderGetQueryParameters();
        // Only request specific properties
        $configuration->queryParameters->select = ['displayName','id','mail','createdDateTime'];
        // Sort by display name
        //$configuration->queryParameters->filter = "startswith(displayName, 'CC')";
        $configuration->queryParameters->orderby = ['displayName'];
        // Get at most 25 results
        //$configuration->queryParameters->top = 25; 

        $usersArray = GraphHelper::$appClient->users()->get($configuration)->wait();
       
        $data = [];
        foreach ($usersArray?->getValue() as $user) {
            $data[] = self::getDataAll( $user);
        }

        return  $data;
       
    }

    public static function createUser(string $displayName, string $mailNickname, string $userPrincipalName, string $password): array
    {

        $requestBody = new GraphUser();
        $requestBody->setAccountEnabled(true);
        $requestBody->setDisplayName($displayName);
        $requestBody->setMailNickname($mailNickname);
        $requestBody->setUserPrincipalName($userPrincipalName);
        $passwordProfile = new Models\PasswordProfile();
        $passwordProfile->setForceChangePasswordNextSignIn(true);
        $passwordProfile->setPassword($password);
        $requestBody->setPasswordProfile($passwordProfile);



        try {
            $user = GraphHelper::$appClient->users()->post($requestBody)->wait();

            return $user ? self::getDataAll($user) : null;

        } catch (\Throwable $e) {
           
            error_log('Error creating user: ' . $e->getMessage());
            dd($e);
            return null;
            
        }
    }

    public static function getDataAll($user)
    {
        return [
            'id' => $user->getid(),
            'displayName' => $user->getDisplayName(),
            'mail' => $user->getMail(),
            'userPrincipalName' => $user->getUserPrincipalName(),
            'jobTitle' => $user->getJobTitle(),
            'department' => $user->getDepartment(),
            'officeLocation' => $user->getOfficeLocation(),
            'country' => $user->getCountry(),
            'businessPhones' => $user->getBusinessPhones(),
            'manager' => $user->getManager(),
            'directReports' => $user->getDirectReports(),
            'birthday' => $user->getBirthday(),
            'hireDate' => $user->getHireDate(),
            'accountEnabled' => $user->getAccountEnabled(),
            'licenseDetails' => $user->getLicenseDetails(),
            'createdDateTime' => $user->getCreatedDateTime(),
/*
           'aboutMe' => $user->getAboutMe(),
            'accountEnabled' => $user->getAccountEnabled(),
            'activities' => $user->getActivities(),
            'ageGroup' => $user->getAgeGroup(),
            'agreementAcceptances' => $user->getAgreementAcceptances(),
            'appRoleAssignments' => $user->getAppRoleAssignments(),
            'assignedLicenses' => $user->getAssignedLicenses(),
            'assignedPlans' => $user->getAssignedPlans(),
            'authentication' => $user->getAuthentication(),
            'authorizationInfo' => $user->getAuthorizationInfo(),
            'birthday' => $user->getBirthday(),
            'businessPhones' => $user->getBusinessPhones(),
            'calendar' => $user->getCalendar(),
            'calendarGroups' => $user->getCalendarGroups(),
            'calendars' => $user->getCalendars(),
            'calendarView' => $user->getCalendarView(),
            'chats' => $user->getChats(),
            'city' => $user->getCity(),
            'cloudClipboard' => $user->getCloudClipboard(),
            'companyName' => $user->getCompanyName(),
            'consentProvidedForMinor' => $user->getConsentProvidedForMinor(),
            'contactFolders' => $user->getContactFolders(),
            'contacts' => $user->getContacts(),
            'country' => $user->getCountry(),
           
            'createdObjects' => $user->getCreatedObjects(),
            'creationType' => $user->getCreationType(),
            'customSecurityAttributes' => $user->getCustomSecurityAttributes(),
            'department' => $user->getDepartment(),
            'deviceEnrollmentLimit' => $user->getDeviceEnrollmentLimit(),
            'deviceManagementTroubleshootingEvents' => $user->getDeviceManagementTroubleshootingEvents(),
            'directReports' => $user->getDirectReports(),
            'displayName' => $user->getDisplayName(),
            'drive' => $user->getDrive(),
            'drives' => $user->getDrives(),
            'employeeExperience' => $user->getEmployeeExperience(),
            'employeeHireDate' => $user->getEmployeeHireDate(),
            'employeeId' => $user->getEmployeeId(),
            'employeeLeaveDateTime' => $user->getEmployeeLeaveDateTime(),
            'employeeOrgData' => $user->getEmployeeOrgData(),
            'employeeType' => $user->getEmployeeType(),
            'print' => $user->getEscapedPrint(),
            'events' => $user->getEvents(),
            'extensions' => $user->getExtensions(),
            'externalUserState' => $user->getExternalUserState(),
            'externalUserStateChangeDateTime' => $user->getExternalUserStateChangeDateTime(),
            'faxNumber' => $user->getFaxNumber(),
            'followedSites' => $user->getFollowedSites(),
            'givenName' => $user->getGivenName(),
            'hireDate' => $user->getHireDate(),
            'identities' => $user->getIdentities(),
            'imAddresses' => $user->getImAddresses(),
            'inferenceClassification' => $user->getInferenceClassification(),
            'insights' => $user->getInsights(),
            'interests' => $user->getInterests(),
            'isResourceAccount' => $user->getIsResourceAccount(),
            'jobTitle' => $user->getJobTitle(),
            'joinedTeams' => $user->getJoinedTeams(),
            'lastPasswordChangeDateTime' => $user->getLastPasswordChangeDateTime(),
            'legalAgeGroupClassification' => $user->getLegalAgeGroupClassification(),
            'licenseAssignmentStates' => $user->getLicenseAssignmentStates(),
            'licenseDetails' => $user->getLicenseDetails(),
            'mail' => $user->getMail(),
            'mailboxSettings' => $user->getMailboxSettings(),
            'mailFolders' => $user->getMailFolders(),
            'mailNickname' => $user->getMailNickname(),
            'managedAppRegistrations' => $user->getManagedAppRegistrations(),
            'managedDevices' => $user->getManagedDevices(),
            'manager' => $user->getManager(),
            'memberOf' => $user->getMemberOf(),
            'messages' => $user->getMessages(),
            'mobilePhone' => $user->getMobilePhone(),
            'mySite' => $user->getMySite(),
            'oauth2PermissionGrants' => $user->getOauth2PermissionGrants(),
            'officeLocation' => $user->getOfficeLocation(),
            'onenote' => $user->getOnenote(),
            'onlineMeetings' => $user->getOnlineMeetings(),
            'onPremisesDistinguishedName' => $user->getOnPremisesDistinguishedName(),
            'onPremisesDomainName' => $user->getOnPremisesDomainName(),
            'onPremisesExtensionAttributes' => $user->getOnPremisesExtensionAttributes(),
            'onPremisesImmutableId' => $user->getOnPremisesImmutableId(),
            'onPremisesLastSyncDateTime' => $user->getOnPremisesLastSyncDateTime(),
            'onPremisesProvisioningErrors' => $user->getOnPremisesProvisioningErrors(),
            'onPremisesSamAccountName' => $user->getOnPremisesSamAccountName(),
            'onPremisesSecurityIdentifier' => $user->getOnPremisesSecurityIdentifier(),
            'onPremisesSyncEnabled' => $user->getOnPremisesSyncEnabled(),
            'onPremisesUserPrincipalName' => $user->getOnPremisesUserPrincipalName(),
            'otherMails' => $user->getOtherMails(),
            'outlook' => $user->getOutlook(),
            'ownedDevices' => $user->getOwnedDevices(),
            'ownedObjects' => $user->getOwnedObjects(),
            'passwordPolicies' => $user->getPasswordPolicies(),
            'passwordProfile' => $user->getPasswordProfile(),
            'pastProjects' => $user->getPastProjects(),
            'people' => $user->getPeople(),
            'permissionGrants' => $user->getPermissionGrants(),
            'photo' => $user->getPhoto(),
            'photos' => $user->getPhotos(),
            'planner' => $user->getPlanner(),
            'postalCode' => $user->getPostalCode(),
            'preferredDataLocation' => $user->getPreferredDataLocation(),
            'preferredLanguage' => $user->getPreferredLanguage(),
            'preferredName' => $user->getPreferredName(),
            'presence' => $user->getPresence(),
            'provisionedPlans' => $user->getProvisionedPlans(),
            'proxyAddresses' => $user->getProxyAddresses(),
            'registeredDevices' => $user->getRegisteredDevices(),
            'responsibilities' => $user->getResponsibilities(),
            'schools' => $user->getSchools(),
            'scopedRoleMemberOf' => $user->getScopedRoleMemberOf(),
            'securityIdentifier' => $user->getSecurityIdentifier(),
            'serviceProvisioningErrors' => $user->getServiceProvisioningErrors(),
            'settings' => $user->getSettings(),
            'showInAddressList' => $user->getShowInAddressList(),
            'signInActivity' => $user->getSignInActivity(),
            'signInSessionsValidFromDateTime' => $user->getSignInSessionsValidFromDateTime(),
            'skills' => $user->getSkills(),
            'sponsors' => $user->getSponsors(),
            'state' => $user->getState(),
            'streetAddress' => $user->getStreetAddress(),
            'surname' => $user->getSurname(),
            'teamwork' => $user->getTeamwork(),
            'todo' => $user->getTodo(),
            'transitiveMemberOf' => $user->getTransitiveMemberOf(),
            'usageLocation' => $user->getUsageLocation(),
            'userPrincipalName' => $user->getUserPrincipalName(),
            'userType' => $user->getUserType(), */
        ];
    }
    

}
